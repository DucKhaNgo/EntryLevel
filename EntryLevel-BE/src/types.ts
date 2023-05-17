

export enum sessionStatus {
    OFFERING = "OFFERING",
    RUNNING = "RUNNING",
    OFFBOARDING = "OFFBOARDING"
}

export enum sessionShortTitle  {
    vc = "vc",
    product = "product",
    data = "data",
    data2 = "data2",
    data3 = "data3",
    scrum = "scrum",
    product2 = "product2",
    growth = "growth"    
}

export type sessionProgram = {
    id: string,
    display_title: string,
    thumbnail_img_url: string,
    short_title: sessionShortTitle
}


export type sessionType = {
    id: string,
    name: string,
    status: sessionStatus,
    start_date: string,
    end_date: string,
    created_at: string,
    program: sessionProgram[]
}

export type getAllSessionsResponse = {
    data: sessionType[]
}