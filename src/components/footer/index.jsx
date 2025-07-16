function Footer() {
  return (
    <>
      <section className="" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <footer className="bg-body-tertiary">
          <div className="d-flex flex-wrap  justify-content-center align-items-center gap-4">
            © 2025 Criadoras:
            <h5>
              <a
                className="text-body"
                target="_blank"
                href="https://www.github.com/iingridliveira"
              >
                @iingridliveira
              </a>
            </h5>
            <h5>
              <a
                className="text-body"
                target="_blank"
                href="https://www.github.com/xeniabia"
              >
                @xeniabia
              </a>
            </h5>
            <h5>
              <a
                className="text-body"
                target="_blank"
                href="https://github.com/xeniabia/atendimentodepacientes?tab=readme-ov-file"
              >
                Repositório Git hub
              </a>
            </h5>
          </div>
          <div className="text-center py-3">
            <p className="text-muted">
              Atividade proposta pelo projeto Capacita Brasil Residência em Tic,
              junto à Escola Atlântico Avanti e professor Eliakim Gama
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
