export default function Donnees() {
  return (
    <main className="w-full px-4 py-10">
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-lg shadow-black/20 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-100">Politique de confidentialité</h1>

        <div className="mt-8 space-y-6 text-slate-300">
          <div>
            <h2 className="font-semibold text-slate-100">Données collectées</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Email</li>
              <li>Téléphone</li>
              <li>Nom / désignation</li>
              <li>Message</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Finalité du traitement</h2>
            <p className="mt-2 leading-relaxed">
              Ces données sont utilisées uniquement pour répondre aux messages envoyés via le formulaire de contact.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Base légale</h2>
            <p className="mt-2 leading-relaxed">Le traitement est basé sur le consentement de l'utilisateur.</p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Destinataires</h2>
            <p className="mt-2 leading-relaxed">Les données collectées sont transmises uniquement à l'administrateur du site. Elle peuvent transiter par le service tiers: <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline">EmailJS</a>.</p>
          </div>
          
          <div>
            <h2 className="font-semibold text-slate-100">Durée de conservation</h2>
            <p className="mt-2 leading-relaxed">Les données sont conservées pendant une durée indéterminée sur la boite mail de l'administrateur. Vous pouvez demander leur suppression à tout moment.</p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Droits des utilisateurs</h2>
            <p className="mt-2 leading-relaxed">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Droit d'accès : Vous pouvez demander une copie des données que nous détenons à votre sujet.</li>
              <li>Droit de rectification : Vous pouvez demander la correction de données inexactes ou incomplètes.</li>
              <li>Droit à l'effacement : Vous pouvez demander la suppression de vos données, sous réserve de certaines conditions.</li>
              <li>Droit à la limitation du traitement : Vous pouvez demander que nous limitions le traitement de vos données dans certaines situations.</li>
              <li>Droit d'opposition : Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}