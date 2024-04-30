export interface JobResponse {
    id?: number,
    expiry: Date,
    title: string,
    prompt: string,
    active: boolean,
    description?: string,
    created_at: Date,
    updated_at: Date
}
