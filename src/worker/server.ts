import logger from '@common/logger';

/**
 * Abstraction around bull processor
 */
export class WorkerServer {
    public async setup(): Promise<void> {
        // await this.registerQueues();
        return;
    }

    public async kill(): Promise<unknown> {
        // const promises = this.queues.map((queue) => queue.close(false).catch((e) => logger.error('Error closing queue', e)));
        // return Promise.all(promises);
        return;
    }
}
