import { Integrations as CoreIntegrations } from '@sentry/core';
import { BrowserOptions } from './backend';
import { ReportDialogOptions } from './client';
import { Breadcrumbs, GlobalHandlers, LinkedErrors, TryCatch, UserAgent } from './integrations';
export declare const defaultIntegrations: (CoreIntegrations.Dedupe | CoreIntegrations.InboundFilters | CoreIntegrations.FunctionToString | TryCatch | Breadcrumbs | GlobalHandlers | LinkedErrors | UserAgent)[];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 *
 * @example
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 *
 * @example
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 *
 * @example
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 *
 * @see BrowserOptions for documentation on configuration options.
 */
export declare function init(options?: BrowserOptions): void;
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
export declare function showReportDialog(options?: ReportDialogOptions): void;
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
export declare function lastEventId(): string | undefined;
/**
 * This function is here to be API compatible with the loader
 */
export declare function forceLoad(): void;
/**
 * This function is here to be API compatible with the loader
 */
export declare function onLoad(callback: () => void): void;
