import { createGatewayProxyHandler, Request, Response } from '../../services';
import Board from '../../models/Board';

export const onGetBoards = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { skip, take } = req.query;

        const boards = await Board.find({
            skip,
            take,
        });

        return res({
            status: 200,
            body: { boards },
        });
    }
);
