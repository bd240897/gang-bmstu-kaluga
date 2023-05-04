import React, { useContext, useEffect, useState } from 'react';
import './main_page.css';

function MainPage() {
    return (
    <>
        <section className="team-name">
            <div className="container">
                <h1 className="team-name__header text-center pb-5 pt-5">Команда Банда им Н.Э. Бамана</h1>
            </div>
        </section>

        <section className="team-photo pt-3 pb-3">
            <div className="container">
                <h2 className="team-photo__header text-center mb-3">Слет студенческой молодежи</h2>

                <div className="team-photo__body">
                    <div className="row">
                        <div className="team-photo__item col-4">
                            <img className="" src="https://placehold.jp/800x800.png" alt=""/>
                        </div>
                        <div className="team-photo__item col-4">
                            <img className="" src="https://placehold.jp/800x800.png" alt=""/>
                        </div>
                        <div className="team-photo__item col-4">
                            <img className="" src="https://placehold.jp/800x800.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-us pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <h2 className="about-us__header text-center mb-3">О нас</h2>
                    <div className="about-us__body col-8">
                        <p className="about-us__text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала X
                            VI века. В то время некий безымянный печатник создал большую коллекцию размеров
                            и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
                            только успешно пережил без заметных изменений пять веков, но и перешагнул в
                            электронный дизайн. Его популяризации в новое время послужили публикация листов
                            Letraset с образцами Lorem Ipsum в 60-х годах и,
                            в более недавнее время, программы электронной вёрстки типа Aldus PageMaker,
                            в шаблонах которых используется Lorem Ipsum.
                        </p>
                    </div>
                    <div className="about-us__photo col-4">
                        <img className="team-logo" src="https://placehold.jp/800x800.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="people pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <h2 className="people__header text-center mb-3">Наши участники</h2>
                    <div className="people__body col-12">
                        <p className="people__text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала X
                            VI века. В то время некий безымянный печатник создал большую коллекцию размеров
                            и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
                            только успешно пережил без заметных изменений пять веков, но и перешагнул в
                            электронный дизайн. Его популяризации в новое время послужили публикация листов
                            Letraset с образцами Lorem Ipsum в 60-х годах и,
                            в более недавнее время, программы электронной вёрстки типа Aldus PageMaker,
                            в шаблонах которых используется Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="contacts pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <h2 className="contacts__header text-center mb-3">Контакты</h2>
                    <div className="contacts__boss">
                        Капитан: Иванов Иван
                    </div>
                    <div className="contacts__news">
                        Новости: tg.me/news
                    </div>
                    <div className="contacts__post">
                        Почта: example@ya.ru
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default MainPage;
