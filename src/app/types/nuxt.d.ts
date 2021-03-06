import Vue from 'vue';
import { Store } from 'vuex';
import { Route } from 'vue-router';
import { IState } from '../store';

declare namespace nuxt {
    export interface Context {
        app: App;
        isClient: boolean;
        isServer: boolean;
        isStatic: boolean;
        isDev: boolean;
        route: Route;
        store: Store<IState>;
        env: object;
        params: any;
        query: object;
        redirect: (path: string, query?: object) => void;
        error: ({ statusCode: number, message: string }) => void;
        nuxtState: object;
        beforeNuxtRender: (fn) => void;
    }
}
