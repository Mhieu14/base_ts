import { Application } from '@worker/application';
import logger from '@common/logger';

console.log('RUN');
Application.createApplication().then(() => {
    logger.info('The worker was started successfully!');
});
