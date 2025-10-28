import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SideBarSkeleton';

const SideBar = () => {
  const {getUsers, users, selectedUser, setSelectedUser, isUserLoading} =  useChatStore();
  const onlineUsers = [];


  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if(isUserLoading) return <SidebarSkeleton/>
  return (
    <aside>
      
    </aside>
  )
}

export default SideBar