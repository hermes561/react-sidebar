import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from './ClickOutside';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class HermeSidebar extends Component {
  state = {
      expanded: false
  }  
  
  componentDidMount() {
      this.setState({
          expanded: this.props.sidebarOpen
      });
  }
  
  render() {
    const {sidebarItems, sidebarSelected} = this.props;  
    
    const navItems = sidebarItems ? sidebarItems.map(itemBar => {
        return (
            <NavItem eventKey={itemBar.id} key={itemBar.id} expanded={sidebarSelected.indexOf(itemBar.id+'/') !==-1} >
                { itemBar.icon ? (
                    <NavIcon>
                        <i className={itemBar.icon} style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                  ) : (null)
                } 
                {  itemBar.text ? (
                    <NavText>
                        { itemBar.type === 'link' ? (
                                <a href={itemBar.link} ><b>{itemBar.text}</b></a>
                            ) : (<b>{itemBar.text}</b>)
                        }
                    </NavText> 
                  ) : (null)
                }   
                { itemBar.items ? (
                        itemBar.items.length ? (
                            itemBar.items.map((itemSub) => {
                                return (
                                    <NavItem eventKey={itemBar.id+'/'+itemSub.id} key={itemSub.id}>
                                        <NavText>
                                        {   itemSub.type === 'link' ? (
                                                <a href={itemSub.link} target={itemSub.target ? itemSub.target:''}><b>{itemSub.text}</b>
                                                   <br /><small> { itemSub.summary ? ('( '+itemSub.summary+' )') : (null)}</small>
                                                </a>
                                            ) : (<b>{itemSub.text}</b>)
                                        }
                                        
                                       
                                        </NavText>        
                                    </NavItem>
                                )    
                            })
                            
                       ) : (null) 
                    ) : (null)
                }    
            </NavItem>
        )   
    }): (
        <NavItem eventKey="no_data"></NavItem>
    )
   
    return (
      <div className="App">
        <ClickOutside
            onClickOutside={() => {
                this.setState({ expanded: false });
            }}
        >
            <SideNav
                className ="globalSidebar"
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                    this.setState({ expanded });
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={sidebarSelected}>
                    {navItems}
                </SideNav.Nav>
            </SideNav>
        </ClickOutside>
      </div>
    );
  }
}

export default HermeSidebar;
