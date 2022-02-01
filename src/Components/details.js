/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import DetailedPost from '../../components/DetailedPost'
import { useRoute } from '@react-navigation/native'

const PostScreen = () => {
  const [post, setPosts] = useState([])

  const route = useRoute()

  const c = post.find(post => post.id === route.params.postId)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <DetailedPost post={c} />
    </View>
  )
}

export default PostScreen
