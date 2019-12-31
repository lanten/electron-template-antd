import React from 'react'
import { AppRouter } from '@/components'
import { store } from '@/store'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import routes from './auto-routes'

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="boss-layout app-content">
        <ConfigProvider locale={zhCN}>
          <AppRouter routes={routes} store={store} />
        </ConfigProvider>
      </div>
    )
  }
}