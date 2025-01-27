import React, {useMemo} from 'react'
import {AppBskyFeedDefs} from '@atproto/api'
import {usePalette} from 'lib/hooks/usePalette'
import {StyleSheet} from 'react-native'
import {useStores} from 'state/index'
import {CustomFeedModel} from 'state/models/feeds/custom-feed'
import {CustomFeed} from 'view/com/feeds/CustomFeed'

export function CustomFeedEmbed({
  record,
}: {
  record: AppBskyFeedDefs.GeneratorView
}) {
  const pal = usePalette('default')
  const store = useStores()
  const item = useMemo(
    () => new CustomFeedModel(store, record),
    [store, record],
  )
  return (
    <CustomFeed
      item={item}
      style={[pal.view, pal.border, styles.customFeedOuter]}
      showLikes
    />
  )
}

const styles = StyleSheet.create({
  customFeedOuter: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
})
