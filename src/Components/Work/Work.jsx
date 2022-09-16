import React from 'react'
import "./Work.css"

const Work = () => {
  return (
    <div className='work'>
  <div className='awesome'>
                <span>My Awesome</span>
                <span>Techskills</span>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
        
        
        </div>


   <div className='w-right'>
    <div className='w-mainCircle'>
        <div className='w-secCircle'>
            <img className="w-image" src="https://portfolio-saravanakumarjn.vercel.app/static/media/html_5.e7638e36.svg" alt="" />
        </div>

        <div className='w-secCircle'>
            <img  className="w-image" src="https://portfolio-saravanakumarjn.vercel.app/static/media/css_3.e7a9de36.svg" alt="" />
        </div>

        <div className='w-secCircle'>
            <img  className="w-image" src="https://portfolio-saravanakumarjn.vercel.app/static/media/javascript.fd46ca41.svg" alt="" />
        </div>
        <div className='w-secCircle'>
            <img  className="w-image" src="https://portfolio-saravanakumarjn.vercel.app/static/media/react.e27571ea.svg" alt="" />
        </div>
        <div className='w-secCircle'>
            <img className="w-image"  src="https://portfolio-saravanakumarjn.vercel.app/static/media/redux.a9567540.svg" alt="" />
        </div>
    </div>
   </div>


   <div className='w-right2'>
      <div className='w-mainCircle1'>
    <div className='w-secCircle2'>
         <img className="w-image1" src="https://portfolio-saravanakumarjn.vercel.app/static/media/nodejs-icon.3dc364b8.svg" alt="" />
    </div>
    <div className='w-secCircle2'>
         <img className="w-image1" src="https://portfolio-saravanakumarjn.vercel.app/static/media/express.7e85c513.svg" alt="" />
    </div>
    <div className='w-secCircle2'>
         <img className="w-image1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAllBMVEUAAACJiYmbm5uenp42NjY6OjpPT0/t7e1KSkrb29vW1tYEBASzs7P4+PgjIyPz8/Pk5ORZWVnp6enGxsYXFxfv7+8MDAwQEBBhYWEHBwdwcHDNzc2jo6O4uLiSkpKnp6etra0VFRUgICB3d3e+vr4pKSlAQEBoaGgvLy99fX2xsbEcHBxGRkaCgoLg4OCOjo5UVFQAAACBSnG6AAAAMXRSTlMAdWNfycSwDrQjKPtJBNwJGaUTNucM8+6e944vWkRrVlDq3oc+1b6Wz4FM4rl7HW+rdnmD7AAACKpJREFUeNrtnemCmjAURoOoiIhQRMF935eZ+/4v1ymLIQRMFLRJy/nTOtclx8BHCIuooqKidHpq7a2oY/QRfHg7e/QBNvABeuj9KPABZohCThEFUVQij0W8xpvoflikid5ErRL5N0Wcxex4rW1MyUWUOoQMmj2JRWZLSNCyJRUxW0DiTaUU0baQxjjJKNIAGqMnn8geQtx9baGOztGjlSabiA4Bw1mYu2ZtAAEj2UTCFd3De2btZWhmyyWiQUAHYXoQcJVLZJbRtl/B3w5yiTSDF08RorukTnFOidQuRLkxcuLKokVWfD2u2KMGUWotckU0/NQ8Gvt4DdgGYWuRdgN4ABY5UqWtGVbmVGUZOVpdqlTLE6kDB+foI70geRHJlk/ESxVw1zZyd8U7dGWVI9IDLibhsw38VpgDn0j+u3bpyjGsqHTFoEWwMxsl8a0OTVLEY4jkd72O4yJFJwp3utLIEbENXhH85W8IjzHwifQo4WPchlW68gtFrKm1Z5y3jii8Inju8DtjPtFQKb5TqaUtiPJEv1esjkqQGLq1J0RloeXHrz5RH3FIPn8SraR0+jaE3460ks+3BtQQxY1iRi4RNIoGjV8WOWj0NMlEnCUxjHchQhF/9EuKoAVkUTelE0FHoHFtCfYQ0yJ0tMNKl2GfnRJBk9Qo8eJIMYtCiyDHN7BGdyLJBB0WSap8XbzAwu9IM2WKRVJYjiPVJHYkIv9sfCUSiez0iHa56NfXROQ/GFqJ/DsiM/gAsw+I2EN4P+MPiKBNfWg8wSseR/ROkUIT5PMOP1MbCShihSJ99AwiikQ9YsWPZRf5Z3qkEhFNRIsfVyKVSCVSiVQilUgl8kMl8rdFnH9lrLUIRfBOn5wi7QuELGsmCpFRpD8y4E49Ol9AQhF1mTqD48/yJZ9Irw5pBlcLIclE7MS5QUvcM6uTXCKmgo+sGiMtua5cdIlEOl1INby9S4pJIqJfsMZqcd+erABwFEsgghej1MptXYeJKBZeRHWJuKUCANeEFklG7qGXUT/g3lIsYUUcH2t4MzMzzmYexHRPYooQkbvPTSZtn0w0AUWSkbtroweMiSgWTERvYY3zHDGYnyHGVZ+M4qnSeZ+IlYjc4dHieMHx1Sj+E3xNkxYpPXKbN8TFrflSFIcBrtIiJUfudvPEMrIlo5jfA/a0SLmR+2U+FXNfAxzFnSc84IsWKTFywXeKfAsXndtj26dFyovcxhi9wLiRiOI+n0fXZqRWkch1J2bxpHBVTo9SRaw1jlxjbRV5o3QUsz1okVIit6WXtzX95XB50CLFI7fbKXV8M1BMum4SHvkiGgsrHTaPPxdZxB9Ni3jUZ8Rft5PrcR5rzg9azM//Llhk4QKTRmLpWbAit7aE4eiuYu8AVtO74rcBrsqYdmnZaQ8WCvflWCs8uGCtmz3yTKVd0HEaccVTm7G8dokeXQOXyOy52xLh5y9z0vJImJsQsIgeusQlwHRXRhADaJdPROET2WSImM+LnJki9KmAZ2BS4xZxTe5Fa0xeCr8LXt4nFpM2Kwp75DfDYmjzihwSA5CTx4h91YWhb90zrvVjfG+5ORqAO2es7DB67tZkqw66i7S0vkbQ/8GyrH7wr1ksfk2yyIjfjFmJRPz+8NOuuGXhw9fPdR83yt0gnrrweOcEbxDLPml/UuYQ5cI8iIJNbiyRImM9Y91/+2Et3CcFRNi73a5axuhzWeMaxhcXoXe7i+5Y4cjFk1xsk+Ii9G63V9auLlziiGab9BkiH518wJGLj8nxmigFRdhRvJ0+sVx2U0dJ+U32hUXYUdzUOSO3SUUuv8mkuAg7iodri/cF+EAKPz6+FUJBEfYX7E44uvDlA4qbrw1//L43iscNKnKFul0hEcV7hxFz+ECKcCK8h97IY9dCipBLzWFD1zdbMnKFFUlF8Y2s3dKRK7IIGcVHK1E4piNXbBEyilfzjOOG4IWRK7oIGcW7dupILhhRpEkg8hPFxDH3/t7IiFwZRFJRnB25coiEUZxmSESuJCJhFBN8k3ksjQiO4uwtpDwiOIozxywyiSC0yB9FyiXy4GoFKUX6GaVK5AkReS4Dr3qkEqGRUuSfid9KpBKpRCqRSqQSqbbsgvbI9ADPc2nx0/THBUSEunWbMX5dRKyb6f16XUSs2xs2KpH/VuSivwmlqIgo251aJZLRsJvfGDn/gIjtBuepyS9yjM64E1TE6ih7f6RsLGbDfIhMRBTpfcdDpIHfZjRsArGJcCJ2E5L4zuOG4fM5BRPpLYHkPH7YMBObCCUypQfegw3VsBwTgUTGA6AZtNMNyzMRRsTcQkhdmfY61/jR1ko1LNdEFJFotOpOo8dzDwKuqYblm4ghYi3TzdHdcOHSkg071ChcbPJIxJkTr1ITObKpESwsvLirRGXusEUWQWHYpn9sa8bcv6BNaJEetQau4z5tpiurW1QapStejyni44uWUtuJHa8IfD8QOQBF9KXN6Yqf+ztydVJk2KUIo1cnRDbhVIXFK+Lmi5hAM8m9DnLL8zOC7JZgjMQ3p7JF6g96xAWKaW5X73J/5NDlE6mnRM6JayStM8vDmD4QoT/4YEYp4FGlE94ipFBeE/GS35w92jWyWMYek4epdWoSr9qttXs8+uQbN6f3pEt9ZGuC+EQ80uNGX35JczKwx0e3Iw8ZZ20jHS6P+d/Ysm87FA16CtIM14ozn4coY61oqnZD//S3z+UhzOjXGeJNJxmLGx4PgfZH4l+fjC6Btb9xkrE9RNpDvMe590upXS8GACuzxncPsfbZF5DFCOUyij1Em0U5Ak3LRLnsIw/x5rXo4VvTQvn0Qg8RZxpVcqfBuJroEaoH7knMuV/bN7DHt44YmDdT2Nl456vlAoDbUmyhj8tzTWKbwU0lxD7BAIu8Eyzi1d/E6jURUX99rxIRTWSH3s8GPsAafYA9vJ2Dhj5Be6K+l6mJKioqSuY3YwH74eVYPn4AAAAASUVORK5CYII=" alt="" />
    </div>
    <div className='w-secCircle2'>
         <img className="w-image1" src="https://portfolio-saravanakumarjn.vercel.app/static/media/mongodb.153b7b44.svg" alt="" />
    </div>
    <div className='w-secCircle2'>
         <img className="w-image1" src="https://portfolio-saravanakumarjn.vercel.app/static/media/github-icon.04ed74f3.svg" alt="" />
    </div>
    </div>
   </div>







    </div>
  )
}

export default Work