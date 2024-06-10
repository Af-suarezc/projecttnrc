import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function GenericAvatar({name}) {
  return (
    <div className='genericAvatar'>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 150, height: 150  }} >{name}</Avatar>
    </div>
  )
}
