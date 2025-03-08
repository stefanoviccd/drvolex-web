import React from 'react';

function MainPage() {
    return <div className='main-page-first-div'>
        <div className='company_brand zoomIn'>
            <h2 className='subtitle'>Mi smo preduzeće <b className='b-drvolex'>DRVOLEX</b></h2>
            <button className='btn-o-nama'>
              <a className="anchor-o-nama"href="/o_nama">O nama</a></button>
        </div>
        <div className='main-info'>
            <p className='txt'>Bez obzira kakav prostor opremate, mi smo tu da Vam pružimo kvalitetnu i brzu uslugu.
            Godinama u nazad firma Drvolex proizvodi nameštaj najrazličitije namene, za kućni ili poslovni prostor.
            Sve što nam treba je Vaša zamisao, ostalo prepustite nama. Od ideje do trenutka kada nameštaj bude u Vašem domu, pružamo kompletnu uslugu po meri.
            Da nisu samo priče, potvrđuje mnoštvo zadovoljnih klijenata sa kojima sa zadovoljstvom sarađujemo godinama unazad.
            Od samog početka trudimo se da naši proizvodi budu najvišeg kvaliteta, da pratimo aktuelne trendove i konstantno ulažemo u opremu 
            koju koristimo u šta se i sami možete uveriti.
            Firma Drvolex poslednjih godina konstantno raste i približava se gigantima u ovoj oblasti.</p>
        </div>
        <div className='company_brand'>
            <h2 className='subtitle'>Izdvajamo iz ponude</h2>
            <div className='gallery'>
<div className='gallery-img'><img className="glr-img" src="../ponuda/kuhinja_crop.jpg" alt='Drvolex kuhinje'></img>
<div className="middle">
    <div className="text"><a className="stand-out-from-the-offer" href='/galerija/kuhinje'>Kuhinje</a><hr></hr></div>
  </div></div>
<div className='gallery-img'><img  className="glr-img" src="../ponuda/kupatila_crop1.jpg" alt='Drvolex kupatila'></img>
<div className="middle">
    <div className="text"><a className="stand-out-from-the-offer" href='/galerija/kupatila'>Kupatila</a><hr></hr></div>
  </div></div>
<div className='gallery-img'><img  className="glr-img" src="../ponuda/plakari_crop.jpg" alt='Drvolex plakari'></img>
<div className="middle">
    <div className="text"><a className="stand-out-from-the-offer" href='/galerija/plakari'>Plakari</a><hr></hr></div>
  </div></div>
<div className='gallery-img'><img className="glr-img" src="../ponuda/police_crop.jpg" alt='Drvolex police'></img>
<div className="middle">
    <div className="text"><a className="stand-out-from-the-offer" href='/galerija/police'>Police</a><hr></hr></div>
  </div></div>
<div className='gallery-img'><img className="glr-img" src="../ponuda/rasveta_crop.jpg" alt='Drvolex kancelarijska rasveta'></img>
<div className="middle">
    <div className="text"><a className="stand-out-from-the-offer" href='/galerija/kancelarijskiProstor'>Kancelarijski prostor</a><hr></hr></div>
  </div></div>


            </div>

            <button className='btn-kompletna_ponuda'><a href='/galerija/kuhinje'>Pogledaj kompletnu ponudu</a></button>
        </div>
       
    </div>

}

export default MainPage;
