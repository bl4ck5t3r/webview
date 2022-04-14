export interface OrderedVehiclesInterface {
    id: number;
    model: string;
    displayName: string;
    displayClass: string;

    orderedBy: string;
    deliverdAt: string;

    deliveryRequestedAt: string;
    deliveryRequestedBy: string;
}