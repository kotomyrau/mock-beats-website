import React from 'react'
import {SideNav, Icon, CloseIcon } from './SideNavElements'

const SideNavbar = ({ isOpen, toggle }) => {

    return (
        <SideNav  isOpen={isOpen} onClick={toggle}>
                  <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
        </SideNav>
    )
}

export default SideNavbar
