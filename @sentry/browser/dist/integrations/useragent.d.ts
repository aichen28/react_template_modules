import { Integration } from '@sentry/types';
/** UserAgent */
export declare class UserAgent implements Integration {
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * @inheritDoc
     */
    static id: string;
    /**
     * @inheritDoc
     */
    setupOnce(): void;
}
