import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;

/*representation
blue team = 1
red team = 2 */

class Solution {
    public boolean possibleBipartition(int n, int[][] dislikes) {
        // It is always able to seperate into different teams if only 1 or less dislikes relationship
        if(dislikes.length<2){return true;}
        int[] color=new int[n+1];
        List<Integer>[] graph=new List[n+1];  //array contains list inside it
        for(int i=0;i<=n;i++){
            graph[i]=new ArrayList<>();
        }

        for(int[] v: dislikes){
            graph[v[0]].add(v[1]);
            graph[v[1]].add(v[0]);
        }

        for(int i=1;i<=n;i++){      //iterating on color array
            // Not yet put into any team
            if(color[i]==0){
                LinkedList<Integer> q=new LinkedList<>();
                q.add(i);
                color[i]=1;

                // q is not empty means that the dislike of the elements is not yet resolved 
                while(!q.isEmpty()){
                    int top=q.removeFirst();
                    for(int nbr: graph[top]){
                        // nbr should be in opposite team of top
                        if(color[nbr]==color[top]){return false;}
                        if(color[nbr]==0){
                            color[nbr]=-color[top];
                            // need to deal with nbr's dislike
                            q.add(nbr);
                        }
                    }
                }
            }
        }
        return true;
    }
}