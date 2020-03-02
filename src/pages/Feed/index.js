import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { Loading } from './styles'
import Posts from '../Posts'

export default function Feed() {
  const [feed, setFeed] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [viewable, setViewable] = useState([])

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return

    setLoading(true)

    const response = await fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`)

    const data = await response.json()
    const totalItems = response.headers.get('X-Total-Count')

    setTotal(Math.floor(totalItems / 5))
    setFeed(shouldRefresh ? data : [...feed, ...data])
    setPage(page + 1)
    setLoading(true)
  }

  useEffect(() => {
    loadPage()
  }, [])

  async function refreshList() {
    setRefreshing(true)

    await loadPage(1, true)

    setRefreshing(false)
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id))
  }, []) 

  return (
    <View>
      <FlatList 
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={.1}
        ListFooterComponent={loading && <Loading />}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
        renderItem={({item}) => <Posts item={item} viewable={viewable} />}
      />
     </View>
  );
}
