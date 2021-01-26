import { createGatewayProxyHandler, Request, Response } from '../../services';

import Board from '../../models/Board';
import { SelfAuthorizer } from '../../middlewares';

export const onUpdateBoard = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, content } = req.body;

        const board = await Board.findOne(id);
        if (!board) throw { status: 404, message: 'NotFound board' };
        await SelfAuthorizer(req, board.user);

        board.title = title || board.title;
        board.content = content || board.content;

        await Board.save(board);

        return res({ status: 204 });
    }
);
