import { createGatewayProxyHandler, Request, Response } from '../../services';
import { Authorizer } from '../../middlewares';

import Board from '../../models/Board';
import BoardComment from '../../models/BoardComment';

export const onCreateBoardComment = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const { content } = req.body;
        const user = await Authorizer(req);

        const board = await Board.findOne(id);
        if (!board) throw { status: 404, message: 'NotFound board' };

        const comment = new BoardComment();
        comment.user = user;
        comment.content = content;
        comment.board = board;

        await BoardComment.save(comment);

        return res({
            status: 201,
            body: { comment },
        });
    }
);
