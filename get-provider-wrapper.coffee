import { getProviderWrapper } from './index.js'

standardProvider = null
export default get = ->
  unless standardProvider
    throw new Error('provider is not set')
  getProviderWrapper(standardProvider)

get.set = (provider) ->
  unless provider
    # 应由外层判断是否有 provider，并处理“没有”的逻辑
    throw new Error('provider is required')
  standardProvider = provider
