import {Header} from "./Header/Header";
import {Body} from "./Body/Body";
import {Footer} from './Footer/Footer'
import {Sidebar} from "@/layout/Sidebar/Sidebar";

import React, {FunctionComponent} from "react";
import {LayoutProps} from "@/layout/Layout.props";

import styles from './Layout.module.css'


export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Body className={styles.body}/>
            <Sidebar className={styles.sidebar}/>
            <Footer className={styles.footer}/>
        </div>
    )
}

const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}