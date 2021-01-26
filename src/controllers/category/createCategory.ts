import { createGatewayProxyHandler, Request, Response } from '../../services';

import BoardCategory from '../../models/BoardCategory';
import { AdminAuthorizer } from '../../middlewares';

export const onCreateBoardCategory = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { name } = req.body;

        await AdminAuthorizer(req);

        const boardCategory = new BoardCategory();
        boardCategory.name = name;

        await BoardCategory.save(boardCategory);

        return res({
            status: 200,
            body: { category: boardCategory },
        });
    }
);
