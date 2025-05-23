enum Status {
    New = 'Новое',
    Viewed = 'Просмотрено',
    InvitationSent = 'Отправлено приглашение',
    // etc...
}

export const statusMap: Record<string, Status> = {
    new: Status.New,
    viewed: Status.Viewed,
    invitationSent: Status.InvitationSent,
}

export interface Resume {
    id: number;
    name: string;
    description: string;
    date: string;
    status: string;
    portfolios?: object | null;
    town: string;
    phone: string;
    age?: number;
    birth_date: string;
    email: string;
    listing_id: number;
    photo?: string;
}