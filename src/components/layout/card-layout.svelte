<div class="CardLayout"><slot /></div>

<style>
  .CardLayout {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2.5rem 0;
  }
</style>
