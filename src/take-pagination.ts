export type PaginationResult = {
  skip: number;
  take: number;
};

/**
 * Take prisma pagination params from umi params.
 * @param params example: current=1&pageSize=10
 * @returns PaginationResult 或者 {}
 */
export const takePagination = (
  params: any,
): PaginationResult | Record<string, never> => {
  if (params && 'current' in params && 'pageSize' in params) {
    return {
      skip: (params.current - 1) * params.pageSize,
      take: params.pageSize,
    };
  }
  return {}; // Record<string, never>
};
