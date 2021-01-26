import { createGatewayProxyHandler, Request, Response } from '../../services';

import Board from '../../models/Board';
import { Authorizer } from '../../middlewares';

export const onCreateBoard = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const user = await Authorizer(req);

        const { title, content } = req.body;
        if (!title || !content)
            throw { status: 400, message: 'BadRequest title or content' };

        const board = new Board();
        board.title = title;
        board.content = content;
        board.user = user;

        await Board.save(board);

        return res({
            status: 201,
            body: { board },
        });
    }
);
