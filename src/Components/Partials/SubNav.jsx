import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from '../../assets/Style/Nav.module.scss'


export const SubNav = () => {
    const [parentGroups, setParentGroups] = useState([]);
    const [subGroups, setSubGroups] = useState([]);
    const [curId, setCurId] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('https://api.mediehuset.net/stringsonline/groups')
            setParentGroups(result.data.items)
        }
        getData()
    }, [setParentGroups])

    const getSubmenu = async group_id => {
        const result = await axios.get(`https://api.mediehuset.net/stringsonline/groups/${group_id}`)
        setCurId(group_id)
        setSubGroups(result.data.items.subgroups);
    }

    return (
        <nav className={style.subnav}>
            <ul>
                {parentGroups && parentGroups.map(group => {
                    return (
                        <li key={group.id} >
                            <Link to={'./products'} onClick={() => getSubmenu(group.id)} title={group.description}>{group.title}</Link>
                            {group.id === curId && (
                                <ul>
                                    {subGroups && subGroups.map(subgroup => {
                                        return (
                                            <li key={subgroup.id}>
                                                <Link to={`/products/${subgroup.id}`}>{subgroup.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}




