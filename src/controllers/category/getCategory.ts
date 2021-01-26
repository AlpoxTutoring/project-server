import { createGatewayProxyHandler, Request, Response } from '../../services';

import BoardCategory from '../../models/BoardCategory';

export const onGetBoardCategory = createGatewayProxyHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;

        const boardCategory = await BoardCategory.findOne({
            where: { id },
            relations: ['boards'],
        });

        if (!BoardCategory)
            throw { status: 404, message: 'NotFound boardCategory' };

        return res({
            status: 200,
            body: { category: boardCategory },
        });
    }
);
