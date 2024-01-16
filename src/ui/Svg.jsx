function Svg({num,sty}) {
    return (
        <>
        {

               num===1&&<img className={`${sty}`} src="/tech/styled.png" alt=""/>
                
        }

        {
               num===2&&<img className={`${sty}`} src="/tech/supabase.png" alt=""/>
        }

        {
                 num===13&&<img className={`${sty}`} src="/tech/tailwind.png" alt=""/>
        }
        </>
    )
}

export default Svg
