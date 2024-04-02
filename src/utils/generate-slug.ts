export function generateSlug(text: string): string {
    const semAcentos = (str: string) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    const slug = semAcentos(text)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')  // substituir caracteres não alfanuméricos por hífen
        .replace(/-+/g, '-')          // substituir múltiplos hífens por apenas um hífen
        .replace(/^-|-$/g, '');       // remover hífens no início e no final
    
    return slug;
}