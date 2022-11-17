import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { LocalHospital, LocalHospitalOutlined, DashboardOutlined,
         Dashboard, Description, DescriptionOutlined } from '@mui/icons-material'



function BarraLateral({name,linkId}) {
        const location = useLocation();
        const history = useNavigate ();
        const asideEvent = useSelector(state => state.appEvents.asideEvents)

        function handleAsideEvent() {
            history.push(linkObj[name]);
            
        }

    const icons = {
        Perfil: asideEvent === name ? Dashboard : DashboardOutlined,
        Historia: asideEvent === name ? Description : DescriptionOutlined,
        Consulta: asideEvent === name ? LocalHospital : LocalHospitalOutlined,
    }

    const linkObj = {
        Perfil: `/dashboard/UserD/`,
        Historia: `/dashboard/Exp/`,
        Consulta: `/dashboard/CitasD/`,
        Configuracion: `/dashboard/config/`
    }

  return (
     <span
        className={`${linkObj[name] === location.pathname ? 'selected':''} aside-option`}
        onClick={(e) => handleAsideEvent(e)}>
        <SvgIcon component={icons[name]} />
        {name}
      </span>
  )
}

export default BarraLateral