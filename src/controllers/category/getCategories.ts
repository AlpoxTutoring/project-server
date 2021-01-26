import { createGatewayProxyHandler, Request, Response } from '../../services';

import BoardCategory from '../../models/BoardCategory';

export const onGetBoardCategories = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const boardCategories = await BoardCategory.find();

        return res({
            status: 200,
            body: { categories: boardCategories },
        });
    }
);
