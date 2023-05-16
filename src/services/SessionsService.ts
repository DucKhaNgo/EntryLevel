
import { getAllSessionsResponse, sessionType } from "../types";

import config from "../config";

export const getAllSessionsService = async function (shortTitle: string[], status: string[]): Promise<getAllSessionsResponse> {
    const res = await fetch(config.getSessionsApi || "");
    
    let data: sessionType[] = [];
    if (res.ok) {
        data = await res.json();
        if (shortTitle.length || status.length) {
            data = data.filter(row => {

                if (shortTitle.length && status.length) {
                    if (shortTitle.includes(row.program[0].short_title) && status.includes(row.status)) {
                        return true;
                    }
                } else if (shortTitle.length) {
                    if (shortTitle.includes(row.program[0].short_title)) {
                        return true;
                    }
                } else if (status.length) {
                    if (status.includes(row.status)) {
                        return true;
                    }
                }
                return false;
            })
        }
    }
    return {
        data
    }
}