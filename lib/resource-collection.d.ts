import { DataSource } from "webpanel-data";
import { ResourceID } from "webpanel-data";
interface useCommentsResourceCollectionProps {
    dataSource: DataSource;
    reference: string;
    referenceID: ResourceID;
}
export declare const useCommentsResourceCollection: ({ dataSource, reference, referenceID, }: useCommentsResourceCollectionProps) => import("webpanel-data").ResourceCollection<any, import("webpanel-data/lib/ResourceCollection").ResourceCollectionConfig<any>>;
export {};
