export type SorterValue = "desc" | "asc";

export type SorterResult = {
  orderBy: Record<string, SorterValue>;
};

/**
 * Take prisma sorter params from umi params.
 */
export const takeSorter = (
  params: any
): SorterResult | Record<string, never> => {
  if (!params || !params.sorter || !params.sorter.field) return null;
  if (params.sorter && params.sorter.order === "descend") {
    return {
      orderBy: {
        [params.sorter.field]: "desc",
      },
    };
  } else if (params.sorter && params.sorter.order === "ascend") {
    return {
      orderBy: {
        [params.sorter.field]: "asc",
      },
    };
  } else {
    return {}; // Record<string, never>
  }
};
