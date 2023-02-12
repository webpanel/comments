import {
  DataSource,
  SortInfoOrder,
  useResourceCollection,
} from "webpanel-data";

import { ResourceID } from "webpanel-data";

interface useCommentsResourceCollectionProps {
  dataSource: DataSource;
  reference: string;
  referenceID: ResourceID;
}

export const useCommentsResourceCollection = ({
  dataSource,
  reference,
  referenceID,
}: useCommentsResourceCollectionProps) => {
  return useResourceCollection({
    dataSource,
    name: "comments",
    fields: [
      "id",
      "text",
      "createdBy",
      "createdByUser { family_name given_name }",
      "createdAt",
    ],
    initialFilters: { reference, referenceID },
    initialSorting: [{ columnKey: "createdAt", order: SortInfoOrder.descend }],
    initialLimit: 10,
    initialOffset: 0,
  });
};
