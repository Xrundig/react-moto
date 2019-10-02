import React from 'react'

class MotoText extends React.Component{
  render(){
    let motoForward = ()=>{
        return(
          <ul>
            <h1>Подготовка вилки и передних тормозов</h1>
            <li>Проверьте состояние сальников. Если уже появились трещинки - закажите новые, в скором времени они начнут пропускать. Смажьте их вазелином</li>
            <li>Проверьте наличие ржавчины на вилке. Если имеются небольшие рыжики - ототрите с помощью обычной тряпки
             и воды, но будьте осторожны и не повредите покрытие вилки.</li>
             <li>Проверьте состояние тормозных шлангов, не должно быть вздутий, трещин. Если они резиновые - их тоже не помешает смазать вазелином</li>
             <li>Проверьте состояние передних колодок и тормозных дисков. Намного удобнее их заказывать зимой, когда появляются скидки, и, самое главное, сроки их поставки Вас не волнуют)</li>
             <li>Сравните как стирается правая и левая колодка на суппорте, так как возможно закисание направляющих. Зимой или поздней осенью можно самому их неспешно перебрать</li>
          </ul>
        )
      }
    let motoAft = ()=>{
      return(
          <ul>
            <h1>Подготовка задней части мотоцикла</h1>
            <li>Почистите и смажьте цепь. Осмотрите внимательно звезды и состояние цепи, заказывать расходники всегда удобнее в межсезонье</li>
            <li>Вставьте тряпку в выхлопную трубу</li>
            <li>Осмотрите состояние задних колодок, заднего тормозного диска. Посмотрите присутствует ли неравномерный износ колодок</li>
            <li>Осмотрите тормозной шланг, проверьте на трещины, вздутия. Если он резиновый, его не помешает смазать вазелином</li>
          </ul>
      )
    }
    let motoCenter = ()=>{
        return(
          <ul>
            <h1>Подготовка двигателя и электрики</h1>
            <li>Отсоедините аккамулятор и храните его в теплом помещении. Я каждый раз забываю, поэтому пишу здесь - в первую очередь снимаем минусовую клемму, а потом плюсовую.
            Рекомендуется его зарядить перед зимовкой, если имеется такая возможность</li>
            <li>Постоянно ведутся споры, когда менять масло: перед зимовкой или после. Если позволяет бюджет, то идеально менять и перед, и после. Если такой возможности нет, или желания))) Лучше менять
            масло уже перед сезоном</li>
            <li>Рекомендуется открутить свечи и капнуть в каждый свечной канал масла, совсем немного, а затем поставить свечи на место. Если честно, то мне всегда лень, и я этого не делаю)</li>
          </ul>
      )
    }
    return(
      <div className="detail-text">
        {this.props.partBike === 'moto-forward' && motoForward()}
        {this.props.partBike === 'moto-aft' && motoAft()}
        {this.props.partBike === 'moto-center' && motoCenter()}
      </div>
    )
  }
}

export default MotoText