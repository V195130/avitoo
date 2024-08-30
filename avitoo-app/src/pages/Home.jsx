import { Card } from "../components/Card/Card"
import { Header } from "../components/Header/Header"
import { cardArray } from "../constants"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img src="/image/search.svg" alt="search" className="search-btn__icon" />
                                <span className="search-btn__text">Поиск</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img src="/image/side-info1.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--text">
                                            Проверка при получении и возможность бесплатного возврата товара.
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img src="/image/side-info2.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Каталог автомобилей</h5>
                                            <p className="content-side__list-item--text">
                                            Отчет об истории автомобиля: пробег, владельцы, информация о происшествиях и ремонте.
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img src="/image/side-info3.svg" alt="side-info"
                                                className="content-side__list-item--img" />
                                            <h5 className="content-side__list-item--title">Онлайн бронирование проживания</h5>
                                            <p className="content-side__list-item--text">
                                            Аренда квартир и домов посуточно: широкий выбор вариантов для путешествий
                                            по всему миру.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
                                        <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}