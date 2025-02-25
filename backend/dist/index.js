import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import testRoutes from './routes/test';
// Resolversのインポート
import { UserResolver } from './resolvers/User.resolver.js';
import { TodoResolver } from './resolvers/Todo.resolver.js';
// Prismaクライアントのインスタンス化
const prisma = new PrismaClient();
async function startServer() {
    try {
        dotenv.config();
        const app = express();
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        // ミドルウェアの設定
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));
        app.use(cookieParser());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        // GraphQLスキーマの構築
        const schema = await buildSchema({
            resolvers: [UserResolver, TodoResolver],
            validate: false,
        });
        // ApolloServerの設定
        const server = new ApolloServer({
            schema,
            formatError: (error) => {
                console.error(error);
                return error;
            },
        });
        // ApolloServerの起動
        await server.start();
        // GraphQLエンドポイントの設定
        app.use('/graphql', expressMiddleware(server, {
            context: async ({ req, res }) => ({
                prisma,
                req: req,
                res,
            }),
        }));
        app.listen(() => {
            console.log('Server running at http://localhost:4001/graphql');
        });
        // 静的ファイルとビューの設定
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'views'));
        app.use(express.static(path.join(__dirname, 'public')));
        // RESTエンドポイント（必要な場合）
        app.get('/', (req, res) => {
            res.render('index');
        });
        // テスト環境でのみテストルートを追加
        if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
            app.use('/test', testRoutes);
        }
        // サーバーの起動
        const PORT = process.env.PORT || 4001;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
// Prismaクライアントのクリーンアップ
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});
startServer().catch(console.error);
//# sourceMappingURL=index.js.map