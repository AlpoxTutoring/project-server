import { createGatewayProxyHandler, Request, Response } from '../../services';
import Board from '../../models/Board';

export const onGetBoard = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;

        const board = await Board.findOne({
            where: { id },
            relations: ['comments'],
        });
        if (!board) throw { status: 404, message: 'NotFound board' };

        return res({
            status: 200,
            body: { board },
        });
    }
);
