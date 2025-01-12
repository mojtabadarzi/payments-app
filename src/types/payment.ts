type Payment = {
    id: string;
    description: string;
    type: PaymentType;
    status: PaymentStatus;
    value: number;
    paid_at: string;
}

type PaymentsResponse = {
    entities: Payment[];
    total: number;
    page: number;
    limit: number;
}

type PaymentStatus = "success" | "pending" | "failed" | ""
type PaymentType = "salary" | "bonus" | "commission" | "transportation" | "overtime" | ""

export type { Payment, PaymentStatus, PaymentType, PaymentsResponse }