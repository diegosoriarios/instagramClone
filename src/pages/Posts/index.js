import React from 'react'

import { Post, Header, Avatar, Name, Description } from './styles'
import LazyImage from '../../components/LazyImage'

export default function Posts({ item, viewable }) {
    return (
        <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }}/>
              <Name>{item.author.name}</Name>
            </Header>

            <LazyImage 
              aspectRatio={item.aspectRatio} 
              smallSource={{ uri: item.small }} 
              source={{ uri: item.image }}
              shouldLoad={viewable.includes(item.id)}
            />
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
        </Post>
    )
}
