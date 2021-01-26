import { createGatewayProxyHandler, Request, Response } from '../../services';

import Board from '../../models/Board';
import BoardComment from '../../models/BoardComment';

export const onGetBoardComments = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;

        const board = await Board.findOne(id);
        if (!board) throw { status: 404, message: 'NotFound board' };

        const comments = await BoardComment.find({
            where: { board },
        });

        return res({
            status: 200,
            body: { comments },
        });
    }
);
