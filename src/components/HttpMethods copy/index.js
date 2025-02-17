import React from 'react';
import styles from "./HttpMethods.module.css";
import clsx from 'clsx';

export const Get = () => <span className={clsx(styles.Http, styles.Get)}>GET</span>;
export const Post = () => <span className={clsx(styles.Http, styles.Post)}>POST</span>;
export const Put = () => <span className={clsx(styles.Http, styles.Put)}>PUT</span>;
export const Delete = () => <span className={clsx(styles.Http, styles.Delete)}>DELETE</span>;