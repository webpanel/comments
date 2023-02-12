import { SortInfoOrder, useResourceCollection, } from "webpanel-data";
export var useCommentsResourceCollection = function (_a) {
    var dataSource = _a.dataSource, reference = _a.reference, referenceID = _a.referenceID;
    return useResourceCollection({
        dataSource: dataSource,
        name: "comments",
        fields: [
            "id",
            "text",
            "createdBy",
            "createdByUser { family_name given_name }",
            "createdAt",
        ],
        initialFilters: { reference: reference, referenceID: referenceID },
        initialSorting: [{ columnKey: "createdAt", order: SortInfoOrder.descend }],
        initialLimit: 10,
        initialOffset: 0,
    });
};
//# sourceMappingURL=resource-collection.js.map