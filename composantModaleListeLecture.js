const divComposant = document.getElementById("composantModaleListeLecture");

divComposant.innerHTML = `<a href="javascript:;" id="boutonModale">Comment utiliser l'interface</a>
      <style type="text/css">
        .modal {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }

        /* Modal Content */
        .modal-content {
          background-color: #fefefe;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid #888;
          max-width: 750px;
        }

        .modal-content p {
          padding: 2rem 0 0 0;
          font-weight: bold;
          font-size: 1.3rem;
        }

        .modal-content img {
          width: 100%;
        }

        /* The fermer Button */
        .fermer {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .fermer:hover,
        .fermer:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      </style>
      <div class="modal" id="maModale">
        <!-- Modal content -->
        <div class="modal-content">

          <span class="fermer">×</span>

          <div>
            <p>
              1) Vous pouvez choisir la vidéo désirer en accédant à la liste de
              lecture via le bouton en haut à droite(1):
            </p>
            <img
              alt="Appuyer en haut a droite pour voir la liste de lecteur"
              src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-1.jpg"
            />
          </div>

          <div>
            <p>
              2) Vous pourrez ainsi choisir la vidéo désirée en cliquant dessus
              (2):
            </p>
            <img
              alt="Choisir lla vidéo désirer dans la liste de lecture"
              src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-2.jpg"
            />
          </div>

          <div>
            <p>
              3) Vous pouvez passer à la vidéo suivante via les boutons de
              lecture ou le raccourci clavier SHIFT+N (3):
            </p>
            <img
              alt="Appuyer sur les icones en bas a droite pour passer à la vidéo suivante"
              src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-3.jpg"
            />
          </div>

          <div>
            <p>
              4) Si vous regarder les vidéos sur YouTube, la liste de lecture
              sera à droite (4) et les documents reliés à la vidéos seront dans
              la description en dessous (5):
            </p>
            <img
              alt="Si vous écouter les vidéos sur YouTube, la liste de lecture sera a droite et les documents liés à la vidéo dans la description en dessous"
              src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-4.jpg"
            />
          </div>
        </div>
      </div>
      `;

var modal = document.getElementById("maModale");
var btn = document.getElementById("boutonModale");
var span = document.getElementsByClassName("fermer")[0];
btn.onclick = function () {
  modal.style.display = "block";
  event.preventDefault;
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
