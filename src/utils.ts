import { UAParser } from 'ua-parser-js';
import { request } from 'express';

export const getUaParserData = (request): object => {
    const result = new UAParser(request.headers['user-agent']).getResult();

    return {
        browser: result.browser,
        OS: result.os,
        device: result.device,
    };
};

export const getProviderData = (request): object => ({
    url: request.url,
    path: request.path,
    hostname: request.hostname,
    ip: request.ip
});